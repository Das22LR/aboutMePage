export default function aboutMeBadges() {
    const badges = [
        { name: "Github", color: "bg-red-300", url: "https://github.com/Das22LR" },
        { name: "Tiktok", color: "bg-blue-300", url: "https://www.tiktok.com/@das22lr" },
        { name: "YouTube", color: "bg-yellow-300", url: "https://www.youtube.com/@DefinitelyNot22LR" },
        { name: "Birthday", color: "bg-slate-300", content: "January 6" },
        { name: "Location", color: "bg-slate-300", content: "Selangor, Malaysia" },
        { name: "Discord", color: "bg-slate-300", content: "_22lr" },
    ];

    // Generate HTML for badges
    return badges
        .map(badge => {
            if (badge.url) {
                // Render a clickable badge
                return `<a href="${badge.url}" class="${badge.color}" style="display:block; padding:5px; margin:5px; color:black; text-decoration:none;">
                            ${badge.name}
                        </a>`;
            } else {
                // Render a non-clickable badge with content
                return `<div class="${badge.color}" style="display:block; padding:5px; margin:5px;">
                            <strong>${badge.name}:</strong> ${badge.content}
                        </div>`;
            }
        })
        .join(""); // Combine all badge HTML into a single string
}
