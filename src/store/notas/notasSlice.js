import { createSlice } from '@reduxjs/toolkit';

export const notasSlice = createSlice({
    name: 'notas',
    initialState:{
        isSaving: false,
        saveMessave: '',
        notes: [],
        active: null,
    },
    
    reducers:{
        addNote: (state, action) =>{
            state.saveMessave = 'Nota Agregada',
            state.notes.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                priority: action.payload.priority,
                date: action.payload.date,
            }),
            state.isSaving = false
        },        
        setNotes: (state, action)=>{
            state.notes = action.payload;
        },
        setSaving: (state, action)=>{
            state.isSaving = true
        },
        updateNote: (state, action)=>{
            state.notes.forEach(note=>{
                if(note.id == action.payload.id){
                    note.title = action.payload.title,
                    note.description = action.payload.description,
                    note.priority = action.payload.priority,
                    note.date = new Date().getTime()
                };
            })
            state.isSaving = false
        },
        deleteNote: (state, action) =>{

        },
    }


});
export const { addNote,deleteNote,setNotes,setSaving, updateNote } = notasSlice.actions;