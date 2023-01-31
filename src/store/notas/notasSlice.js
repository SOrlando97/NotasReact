import { createSlice } from '@reduxjs/toolkit';

export const notasSlice = createSlice({
    name: 'notas',
    initialState:{
        isSaving: true,
        saveMessave: '',
        notes: [],
        active: null,
        // active:{
        //     id: 'asdasda',
        //     title: '',
        //     description: '',
        //     priority: '',
        // }
    },
    reducers:{
        addNote: (state, action) =>{

        },
        deleteNote: (state, action) =>{

        },
        setNotes: (state, action)=>{

        },
        setSaving: (state, action)=>{

        },
        updateNote: (state, action)=>{

        },
    }


});
export const { addNote,deleteNote,setNotes,setSaving, updateNote } = notasSlice.actions;