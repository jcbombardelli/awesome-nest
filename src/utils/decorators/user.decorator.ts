import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((_, request) => {
  const user = request.args[0].user
  return user
})
