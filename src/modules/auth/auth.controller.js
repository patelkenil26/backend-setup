import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/Api-response";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "Registration success", user);
};

export { register };
