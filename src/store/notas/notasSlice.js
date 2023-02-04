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
            state.isSaving = true,
            state.saveMessave = 'Nota Agregada',
            state.notes.push({
                title: action.payload.title,
                description: action.payload.description,
                priority: action.payload.priority,
            }) 
        },        
        setNotes: (state, action)=>{
            state.notes = action.payload;
        },
        setSaving: (state, action)=>{

        },
        updateNote: (state, action)=>{

        },
        deleteNote: (state, action) =>{

        },
    }


});
export const { addNote,deleteNote,setNotes,setSaving, updateNote } = notasSlice.actions;