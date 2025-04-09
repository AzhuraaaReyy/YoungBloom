import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import posts from "../../Data/posts";
import { useForm } from "react-hook-form";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const FormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [image, setImage] = useState(post?.image || "");
  const [title, setTitle] = useState(post?.title || "");
  const [description, setDescription] = useState(post?.description || "");

  useEffect(() => {
    if (post) {
      setValue("judul", post.title);
      setValue("isi", post.description);
    }
  }, [post, setValue]);

  const onSubmit = (data) => {
    if (post) {
      post.title = data.judul;
      post.description = data.isi;
      post.image = image; // Bisa simpan URL/file preview
      alert("Berhasil disimpan!");
      navigate(`/dashboard`);
    }
  };

  const onErrors = (errors) => {
    console.log(errors);
  };

  if (!post) {
    return <div className="text-white mt-10">Postingan tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      {/* Header */}

      <h1 className="text-3xl font-bold mb-10 mt-10">Edit Postingan</h1>
      <form
        onSubmit={handleSubmit(onSubmit, onErrors)}
        className="w-80 max-w-md space-y-6"
      >
        <div className="mb-10">
          <LabeledInput
            label="Gambar"
            type="file"
            placeholder="no file chosen"
            name="gambar"
            register={register("gambar")}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setImage(imageUrl);
              }
            }}
          />
          {errors?.gambar && (
            <div className="text-center text-red-500">
              {errors.gambar.message}
            </div>
          )}
        </div>

        <div className="mb-7">
          <LabeledInput
            label="Judul"
            type="text"
            placeholder="Masukkan judul"
            name="judul"
            register={register("judul", {
              required: "Judul Tidak Boleh Kosong!",
            })}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors?.judul && (
            <div className="text-center text-red-500">
              {errors.judul.message}
            </div>
          )}
        </div>

        <div className="mb-7">
          <LabeledInput
            label="Isi"
            type="textarea"
            placeholder="Masukkan isi"
            name="isi"
            register={register("isi", {
              required: "Isi Tidak Boleh Kosong!",
            })}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors?.isi && (
            <div className="text-center text-red-500">{errors.isi.message}</div>
          )}
        </div>

        <div className="flex space-x-4">
          <Button
            variant="w-[100px] bg-black text-[#639F4E] font-semibold py-2 rounded-lg hover:bg-[#639F4E] transition border border-[#639F4E] hover:border-[#639F4E] hover:text-white"
            type="submit"
          >
            SUBMIT
          </Button>

          <NavLink to={`/edit/${id}`}>
            <Button
              variant="w-[100px] bg-black text-white font-semibold py-2 rounded-lg hover:bg-[#639F4E] transition border border-white hover:border-[#639F4E] hover:text-white"
              type="button"
            >
              Kembali
            </Button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
