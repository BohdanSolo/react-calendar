export const rules = {
  required: (
    message: string = "This field is required"
  ): { required: boolean; message: string } => ({
    required: true,
    message,
  }),
};
