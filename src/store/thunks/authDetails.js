import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axiosInstance = axios.create({ baseURL: "http://89.116.230.202" });
const authLogin = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "http://localhost:5000/employee/login",
        {
          email: userData.email,
          password: userData.password,
        }
      );
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const authSignup = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "http://localhost:5000/employee/signup",
        {
          email: userData,
          password: userData.password,
        }
      );
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const adminLogin = createAsyncThunk(
  "admin/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "http://localhost:5000/admin/login",
        {
          email: userData.email,
          password: userData.password,
        }
      );

      console.log(data);
      localStorage.setItem("adminToken", data);
      localStorage.setItem("isAdmin", true);

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
export { authLogin, authSignup, adminLogin };
