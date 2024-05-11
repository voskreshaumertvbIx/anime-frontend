import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useCreateAnimeMutation } from "../../redux/services/createAnimeApi";
import { toast } from "react-toastify";
import styles from "./style.module.css";
import { TagsInput } from "react-tag-input-component";
import { current } from "@reduxjs/toolkit";
export const AnimeCreate = () => {
  const [createAnime] = useCreateAnimeMutation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formValues, setFormValues] = useState({
    englishTitle: "",
    originalTitle: "",
    releaseYear: "",
    genres: [] as string[],
    tags: [] as string[],
    episodesTotal: "",
    description: "",
    formData: new FormData(),
  });

  const {
    englishTitle,
    originalTitle,
    releaseYear,
    genres,
    tags,
    episodesTotal,
    description,
  } = formValues;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("englishTitle", englishTitle);
    formData.append("originalTitle", originalTitle);
    formData.append("releaseYear", releaseYear);
    genres.forEach(genre => {
      formData.append("genres", genre);
  });
    tags.forEach(tag =>{
      formData.append("tags", tag);
    })
    
    formData.append("episodesTotal", episodesTotal);
    formData.append("description", description);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await createAnime(formData);
      if ("error" in response) {
        toast.error("Failed to upload anime");
      } else {
        toast.success("Anime uploaded successfully");
      }
    } catch (error) {
      toast.error("Failed to upload anime. Please try again.");
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleChangeValueImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);

      const updatedFormData = new FormData();
      updatedFormData.append("image", file);
      setFormValues({ ...formValues, formData: updatedFormData });
    }
  };

  const handleContentChange = (event:SyntheticEvent<HTMLDivElement>) => {
    const { textContent } = event.currentTarget;
    setFormValues({
      ...formValues,
      description: textContent || '',  
    });
  };

  const textAreaRef = useRef(null);
  useEffect(() => {
    // Перемещаем курсор в конец текстового поля при обновлении его содержимого
    const textArea = textAreaRef.current;
    if (textArea) {
      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(textArea);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, [formValues.description]);
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit} className={styles.form}>

      
      <label >English Title:</label>
        <input
           className={styles.form_input}
          type="text"
          name="englishTitle"
          placeholder="english title"
          onChange={handleChangeValue}
          value={englishTitle}
        />
        
        
        <label >Original Title:</label>
        <input className={styles.form_input}
          type="text"
          name="originalTitle"
          placeholder="original title"
          onChange={handleChangeValue}
          value={originalTitle}
        />
        
        <label >Relese year:</label>
        <input className={styles.form_input}
         pattern="[0-9]"
          type="number"
          name="releaseYear"
          placeholder="relese year"
          onChange={handleChangeValue}
          value={releaseYear}
        />
        
        
        <label >Enter genres</label>
        <TagsInput
          classNames={{tag:styles.tag, input: styles.input_tag}}
          name="genres"
          placeHolder="enter genres"
          value={genres}
          onChange={(newGenres: string[]) =>
            setFormValues({ ...formValues, genres: newGenres })
          }
        />
        
        
        <label >Enter tags</label>
        <TagsInput
          classNames={{tag:styles.tag, input: styles.input_tag}}
          name="tags"
          placeHolder="enter tags"
          onChange={(newTags: string[]) =>
            setFormValues({ ...formValues, tags: newTags })
          }
          value={tags}
        />


        <label>Episod total</label>
        <input className={styles.form_input}
          type="number"
          pattern="[0-9]"
          name="episodesTotal"
          placeholder="episodesTotal"
          onChange={handleChangeValue}
          value={episodesTotal}
        />
        <label >Enter description</label>
       <div
        ref={textAreaRef}
      className={styles.textarea}
      role="textbox"
      contentEditable
      onInput={handleContentChange}
    >
      {description}
    </div>
    
    <label >Enter anime  logo</label>
        <input 
          type="file"
          onChange={handleChangeValueImage}
          accept="image/*"
          className={styles.form_input}
        />
        <button className={styles.submitCreate}> upload</button>
      </form>
    </div>
  );
};
