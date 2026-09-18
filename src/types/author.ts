export interface AuthorProfile {
  id: number;
  slug: string;
  name: string;
  designation: string; // e.g., "Senior Political Reporter"
  bio: string;         // Short description of expertise
  image: string;       // URL to profile photo
  experience: string;  // e.g., "7 Years in Journalism"
  expertise: string[]; // Array of categories, e.g., ['Politics', 'Crime']
}

// Example representation of how the WP REST API might return this
// if exposed via Advanced Custom Fields (ACF) or a custom endpoint:
export interface WPUserResponse {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta: {
    jagmarg_designation?: string;
    jagmarg_experience?: string;
    jagmarg_expertise?: string[]; // Stored as serialized array or comma-separated
    jagmarg_profile_photo_url?: string;
  };
  acf?: {
    designation: string;
    experience: string;
    expertise: string[];
  };
}
