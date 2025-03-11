import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from '../../api/authService';
import { AuthType } from '../../type/auth';

interface AuthState {
  user: AuthType['user'] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      return await login(data.email, data.password);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      return await register(data.name, data.email, data.password);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Registration failed'
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem('token', action.payload);
      } else {
        localStorage.removeItem('token');
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.authorization?.token || null;

        if (state.token) {
          localStorage.setItem('token', state.token);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        const errorPayload = action.payload as { message?: string };

        if (typeof errorPayload === 'string') {
          state.error = errorPayload;
        } else if (errorPayload?.message) {
          state.error = errorPayload.message;
        } else {
          state.error = 'Login failed. Please try again.';
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.authorization?.token || null;

        if (state.token) {
          localStorage.setItem('token', state.token);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
