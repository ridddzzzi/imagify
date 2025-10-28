import userModel from "../models/userModel.js";

export const generateImage = async (req,res) => {
    try {
        //here goes the logic to generate the image using prompt
        const userId = req.userId;
        const {prompt} = req.body;
        const user = await userModel.findById(userId)

        if(!user || !prompt) {
            return res.json({success:false, message:"Missing Details!!"})
        }

        if(user.creditBalance === 0 || userModel.creditBalance < 0) {
            return res.json({success:false, message:"Please Purchase More Credits And Try Again!"})
        }

        // Call Hugging Face API
        const response = await fetch(
            'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.HF_API }`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ inputs: prompt })
            }
        );

        // Check if the request was successful
        if (!response.ok) {
            const error = await response.json();
            return res.json({ success: false, message: error.error || "Image generation failed" });
        }

        // Get the image as buffer
        const imageBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(imageBuffer).toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct credit from user
        await userModel.findByIdAndUpdate(user._id, { 
            creditBalance: user.creditBalance - 1 
        });

        // Send success response
        res.json({ 
            success: true, 
            message: "Image generated successfully!", 
            creditBalance: user.creditBalance - 1,
            resultImage 
        });
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
        
    }

}
