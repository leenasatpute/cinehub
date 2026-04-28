import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, mobile, password } = body;

    // 🔴 check empty fields
    if (!name || !email || !mobile || !password) {
      return Response.json({
        success: false,
        message: "All fields are required",
      });
    }

    // 🔴 check duplicate email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json({
        success: false,
        message: "Email already exists",
      });
    }

    // ✅ create user
    const user = await User.create({
      name,
      email,
      mobile,
      password,
      role: "Customer",
    });

    return Response.json({
      success: true,
      message: "Account Created Successfully",
      user,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}

export async function GET() {
  try {
    await connectDB();

    const users = await User.find().select("-password"); // 🔥 password hide

    return Response.json({
      success: true,
      users,
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}