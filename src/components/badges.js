export default function aboutMeBadges() {
    const badges = [
        { name: "Github", color: "bg-red-300", url: "https://github.com/Das22LR" },
        { name: "Tiktok", color: "bg-blue-300", url: "https://www.tiktok.com/@das22lr" },
        { name: "YouTube", color: "bg-yellow-300", url: "https://www.youtube.com/@DefinitelyNot22LR" },
        { name: "Birthday", color: "bg-slate-300", content: "January 6" },
        { name: "Location", color: "bg-slate-300", content: "Selangor, Malaysia" },
        { name: "Discord", color: "bg-slate-300", content: "_22lr" },
    ];

    return badges
        .map(badge => {
            if (badge.url) {
                // Render a clickable badge with the "badge" class and color
                return `<a href="${badge.url}" class="badge ${badge.color}">
                            ${badge.name}
                        </a>`;
            } else {
                // Render a non-clickable badge with the "static-badge" class
                return `<div class="badge ${badge.color} static-badge">
                            <strong>${badge.name}:</strong> ${badge.content}
                        </div>`;
            }
        })
        .join(""); // Combine all badge HTML into a single string
}
