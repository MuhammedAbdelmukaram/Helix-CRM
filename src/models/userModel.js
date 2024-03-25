const mongoose = require('mongoose');

const ProfessionalRoleSchema = new mongoose.Schema({
    role: String,
    selected: Boolean,
});

const WorkExperienceSchema = new mongoose.Schema({
    company: String,
    startDate: String, // Consider using Date type
    endDate: String, // Consider using Date type
    role: String,
    responsibilities: String,
    achievements: String, // Ensure this field is handled if included
});

const UserProfileSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, // Ensure you hash passwords before storing them
    phoneNumber: String,
    amountClosed: String, // Consider using Number type if these will always be numeric
    city: String,
    gender: String,
    country: String,
    numCompanies: String, // Consider using Number type if these will always be numeric
    age: String, // Consider using Number type if these will always be numeric
    language: [String],
    niche: [String],
    experience: String,
    calls: String, // Consider using Number type if these will always be numeric
    calendlyUrl: String,
    twitterUrl: String,
    linkedinUrl: String,
    instagramUrl: String,
    timezone: String,
    workHours: String,
    aboutMe: String,
    professionalRoles: [ProfessionalRoleSchema],
    desiredProfessionalRoles: [ProfessionalRoleSchema],
    workExperiences: [WorkExperienceSchema],
    // Added to store professional roles as an array of strings
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.models.UserProfile || mongoose.model('UserProfile', UserProfileSchema);
