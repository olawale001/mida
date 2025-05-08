# import torch
# from diffusers import StableDiffusionPipeline


# pipe = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4", torch_dtype=torch.float16)
# pipe = pipe.to("cuda")


# def image_generate(promty):
#     image = pipe(promty).images[0]
#     file_path = f"media/generated_images/{promty[:10].replace(' ', '_')}.png"
#     image.save(file_path)
#     return file_path