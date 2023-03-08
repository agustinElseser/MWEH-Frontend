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
