export function formatDistance(m) {
    const f = Number.parseFloat(m) / 1000.0;
    return `${f.toFixed(2)} km`;
}
