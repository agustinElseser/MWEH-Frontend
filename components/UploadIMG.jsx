import { useState } from "react";

const UploadIMG = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    /*const url = "https://api.cloudinary.com/v1_1/mostarq/image/upload";

    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "Proyects");

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          document.getElementById("data").innerHTML += data;
        });
    }*/
  };

  return (
    <>
      <label className="text2">IMG</label>
      <input
        id="file"
        name="file"
        type="file"
        placeholder="select"
        onChange={uploadImage}
      />
    </>
  );
};

export default UploadIMG;
/*
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Proyects");
    setLoading(true);
    const res = await fetch("http://api.cloudinary.com/v1_1/mostarq/upload", {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    setImg(file.secure_url);
    setLoading(false);
    
    
    .then(result=>console.log(result));
    
    cloudinary.config({
      cloud_name: "mostarq",
      api_key: "529459294817443",
      api_secret: "IlfRQHiZvXD_3RnYQbEk4MJ_dHk",
      secure: true,
    });
    const files = e.target.files;
    await cloudinary.uploader.upload(files, { folder: "Proyects" });*/
