import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto";

class ForgotPasswordDto extends BaseDto {
  static schema = Joi.object({
    email: Joi.string().email().lowercase().required(),
  });
}

export default ForgotPasswordDto;
