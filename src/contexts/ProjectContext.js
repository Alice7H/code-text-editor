import React, { createContext, useState } from "react";
import hljs from "highlight.js";
import { toast } from "react-toastify";
import { searchProject } from "../utils/handleSearchProject";

export const CodeEditorContext = createContext();

export default function CodeEditorProvider(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [color, setColor] = useState('#7fffd4');
  const [codeText, setCodeText] = useState('');

  const [toggleCode, setToggleCode] = useState(true);
  const [codeTextHighlighted, setCodeTextHighlighted] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Filtered project
  const handleFilteredProjects = (target) => {
    const filteredResults = searchProject(target);
    setFilteredProjects(filteredResults);
  };

  // Forms changed
  const handleChangeHighlight = () => {
    setToggleCode(!toggleCode);
    if (toggleCode) {
      const highlightedText = hljs.highlight(codeText, { language });
      setCodeTextHighlighted(highlightedText);
    } else {
      setCodeTextHighlighted('');
    }
  };

  // Project component
  const handleSaveProject = (id) => {
    if (!name || !description || !codeText) {
      toast.warn("Informe os campos corretamente.");
    } else {
      id ? _handleChangeProject(id) : _handleCreateProject();
    }
  };

  const _handleCreateProject = () => {
    const newProject = {
      id: Date.now(),
      name: name,
      description: description,
      language: language,
      color: color,
      code: codeText
    };

    _saveInLocalStorage(newProject);
    toast.success("Projeto salvo. Verifique na página da comunidade");
  };

  const _saveInLocalStorage = (newProject) => {
    const tempProject = JSON.parse(localStorage.getItem("projects")) || [];
    tempProject.push(newProject);
    localStorage.setItem("projects", JSON.stringify(tempProject));
  };

  const _handleChangeProject = (id) => {
    const uid = parseInt(id);
    const editProject = {
      id: uid,
      name: name,
      description: description,
      language: language,
      color: color,
      code: codeText
    };
    _updateLocalStorage(uid, editProject);
    toast.success("Projeto editado. Verifique na página da comunidade");
  };

  const _updateLocalStorage = (uid, editProject) => {
    const tempProject = JSON.parse(localStorage.getItem("projects"));
    const prjFiltered = tempProject.filter(prj => prj.id !== uid);
    prjFiltered.push(editProject);
    prjFiltered.sort((a, b) => a.id - b.id);
    localStorage.setItem("projects", JSON.stringify(prjFiltered));
  }

  const clearForms = () => {
    setCodeText("");
    setName("");
    setDescription("");
    setColor('#7fffd4');
    setLanguage('javascript');
    setCodeTextHighlighted("");
    setToggleCode(true);
  }

  return (
    <CodeEditorContext.Provider
      value={{
        handleFilteredProjects,
        filteredProjects,
        toggleCode,
        handleChangeHighlight,
        codeTextHighlighted,
        setCodeText,
        codeText,
        setColor,
        color,
        setName,
        name,
        setDescription,
        description,
        setLanguage,
        language,
        handleSaveProject,
        clearForms
      }}
    >
      {props.children}
    </CodeEditorContext.Provider>
  );
}
