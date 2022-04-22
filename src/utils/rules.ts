
export const rules = {
    required: (message: string): {required: boolean, message: string} => ({
        required: true,
        message
    })
}