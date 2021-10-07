export const PHONE_CLEANER = (phone: string | undefined) => {
    return phone ? phone.replace(/\D/g, '') : null
}