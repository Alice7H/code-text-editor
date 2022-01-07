import React, { createContext, useState } from "react";
import hljs from "highlight.js";
import { toast } from "react-toastify";
import { searchProject } from "../utils/handleSearchProject";

export const CodeEditorContext = createContext();

export default function CodeEditorProvider(props) {
  const [languageHighlight, setLanguageHighlight] = useState('javascript');
  const [colorBorderBox, setColorBorderBox] = useState('#7fffd4');
  const [codeHighlight, setCodeHighlight] = useState("");

  const [toggleCode, setToggleCode] = useState(true);
  const [codeTextHighlighted, setCodeTextHighlighted] = useState("");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Filtered project
  const handleFilteredProjects = (target) => {
    const filteredResults = searchProject(target);
    setFilteredProjects(filteredResults);
  };

  const handleChangeHighlight = () => {
    setToggleCode(!toggleCode);
    if (toggleCode) {
      const highlightedText = hljs.highlight(codeHighlight, { language: languageHighlight });
      // { language, code, value} = highlightedText
      setCodeTextHighlighted(highlightedText);
    } else {
      setCodeTextHighlighted('');
    }
  };

    // Project component
    const handleSaveProject = (prj, id) => {
      if (!prj.name || !prj.description || !codeHighlight) {
        toast.warn("Informe os campos corretamente.");
      } else {
        id ? _handleChangeProject(id,prj) : _handleCreateProject(prj);
      }
    };
  
    const _handleCreateProject = (prj) => {
      const newProject = {
        id: Date.now(),
        name: prj.name,
        description: prj.description,
        language: languageHighlight,
        color: colorBorderBox,
        code: codeHighlight,
      };
      setProjects([...projects, newProject]);
  
      _saveInLocalStorage(newProject);
      toast.success("Projeto salvo. Verifique na página da comunidade");
    };
  
    const _handleChangeProject = (id, prj) => {
      const uid = parseInt(id);
      const editProject = {
        id: uid,
        name: prj.name,
        description: prj.description,
        language: languageHighlight,
        color: colorBorderBox,
        code: codeHighlight,
      };
      setProjects(
        projects.map((item) => {
          return item.id === uid ? item : editProject;
        })
      );
  
      _updateLocalStorage(uid, editProject);
      toast.success("Projeto editado. Verifique na página da comunidade");
    };
  
    const _saveInLocalStorage = (newProject) => {
      const tempProject = JSON.parse(localStorage.getItem("projects"));
      tempProject.push(newProject);
      localStorage.setItem("projects", JSON.stringify(tempProject));
    };

    const _updateLocalStorage = (uid, editProject) => {
      const tempProject = JSON.parse(localStorage.getItem("projects"));
      const prjFiltered = tempProject.filter(prj => prj.id !== uid);
      prjFiltered.push(editProject);
      prjFiltered.sort((a,b) => a.id - b.id);
      localStorage.setItem("projects", JSON.stringify(prjFiltered));
    }

    const clearForms = () => {
      setColorBorderBox('#7fffd4');
      setLanguageHighlight('javascript');
      setCodeTextHighlighted("");
      setCodeHighlight("");
    }
  
  return (
    <CodeEditorContext.Provider
      value={{
        toggleCode,
        handleChangeHighlight,
        handleFilteredProjects,
        filteredProjects,
        handleSaveProject,
        setCodeHighlight,
        setColorBorderBox,
        setLanguageHighlight,
        codeTextHighlighted,
        codeHighlight,
        colorBorderBox,
        languageHighlight,
        clearForms
      }}
    >
      {props.children}
    </CodeEditorContext.Provider>
  );
}
