const today = new Date();
const now = new Date();
// Create default time slot 2 hours ahead of now
now.setHours(now.getHours() + 2);
const startHour = now.getHours().toString().padStart(2, "0");
now.setHours(now.getHours() + 1);
const endHour = now.getHours().toString().padStart(2, "0");
const timeSlot = `${startHour}:00${endHour}:00`;

export default timeSlot;