export const searchProject = (searchValue) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  if(searchValue !== '' && projects.length > 0) {
    return projects.filter(project => 
      JSON.stringify(project).toLowerCase()
      .indexOf(searchValue.toLowerCase()) !== -1);
  }
  return [];
}


