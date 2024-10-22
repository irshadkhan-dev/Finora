"use server";

export async function generateThumbnail(prompt: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/generate-thumbnail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    const data = await response.json();

    if (data.image) {
      // Do something with the generated image
      console.log("Generated Image:", data.image);
      // For example, display the image on the page
      const imgElement = document.createElement("img");
      imgElement.src = `data:image/png;base64,${data.image}`;
      document.body.appendChild(imgElement);
    } else {
      console.error("Image generation failed:", data.error);
    }
  } catch (error) {
    console.error("Error in API call:", error);
  }
}
