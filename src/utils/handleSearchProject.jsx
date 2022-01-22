export const searchProject = (searchValue) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  if((projects !== null || projects?.length > 0) && searchValue !== '') {
    return projects.filter(project => 
      JSON.stringify(project).toLowerCase()
      .indexOf(searchValue.toLowerCase()) !== -1);
  }
  return [];
}


