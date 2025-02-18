import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6682cebb4102471fa4c85185.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// read Action
export const showUser = createAsyncThunk("showUser", async(args, {rejectWithValue})=>{

    const response = await fetch("https://6682cebb4102471fa4c85185.mockapi.io/crud")

    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//delete Action
export const deleteUser = createAsyncThunk("deleteUser", async(id, {rejectWithValue})=>{

  const response = await fetch(`https://6682cebb4102471fa4c85185.mockapi.io/crud/${id}`, {method: "DELETE"})

  try {
      const result = await response.json()
      return result
  } catch (error) {
      return rejectWithValue(error)
  }
})


// update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log('updated data', data);
    const response = await fetch(
      `https://6682cebb4102471fa4c85185.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);








export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData:[],
  },

  reducers: {
    searchUser: (state, action) =>{
      state.searchData = action.payload;
    }
  },


  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors on new request
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add new user to the users array
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      })

      .addCase(showUser.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = (action.payload); 
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })

      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;

        const {id} = action.payload
        
        if(id){

          state.users = state.users.filter((ele)=> ele.id !== id)
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })


      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors on new request
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) => ele.id === action.payload.id ? action.payload : ele)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      })
  },
});

export default userDetail.reducer;

export const {searchUser} = userDetail.actions
