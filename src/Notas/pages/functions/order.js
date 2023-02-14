export const orderbypriority = (priority,notes) =>{
    const newnotes= [];
    let notascomp = [];
    switch (priority) {
        case "alta": case"media": case"baja":
                for (let i = 0; i < notes.length; i++) {        
                    notes[i].priority==priority
                    ?newnotes.push(notes[i])
                    :notascomp.push(notes[i]);        
                }
                notascomp.sort(function(a,b){
                    if(a.priority > b.priority){
                        return 1
                    }
                    if (a.priority < b.priority) {
                        return -1;
                    }        
                    return 0;
                })
            break;
        case "viejas":
            notascomp = [...notes];
            notascomp.sort((a, b) => {
                if (a.date > b.date) {
                  return 1;
                }
                if (a.date < b.date) {
                  return -1;
                }
                return 0;
              });
              break;
        case "nuevas":
            notascomp = [...notes];
            notascomp.sort((a, b) => {
                if (a.date < b.date) {
                  return 1;
                }
                if (a.date > b.date) {
                  return -1;
                }
                return 0;
              });
              break;
        case "default":
            notascomp = [...notes];
            notascomp.sort((a, b) => {
                if (a.id > b.id) {
                return 1;
                }
                if (a.id < b.id) {
                return -1;
                }
                return 0;
            });
            break;
    }    
    return [...newnotes,...notascomp];
}
//prueba de mejor metodo
export const orderbypriority2 = (priority,notes) =>{    
    notes?.map( nota =>(
            console.log(nota)
        ))
       
}