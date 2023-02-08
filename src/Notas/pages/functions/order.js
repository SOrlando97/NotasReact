export const orderbypriority = (priority,notes) =>{
    const newnotes= [];
    let notascomp = [];
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
    return [...newnotes,...notascomp];
}