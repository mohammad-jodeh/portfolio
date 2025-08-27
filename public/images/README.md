# Profile Photo Instructions

To add your profile photo:

1. Add your photo file to this directory (`public/images/`)
2. Name it `mohammad-photo.jpg` (or update the filename in the code)
3. In `src/components/ProfileHeader.tsx`, uncomment the image line and comment out the placeholder:

```tsx
// Comment out this line:
// <div className="avatar-placeholder">
//   <User size={48} />
// </div>

// Uncomment this line:
<img src="/images/mohammad-photo.jpg" alt="Mohammad Abojodeh" className="profile-photo" />
```

Recommended photo specifications:
- Square aspect ratio (1:1)
- Minimum 200x200 pixels
- Professional headshot
- Good lighting and clear background
- JPG or PNG format
