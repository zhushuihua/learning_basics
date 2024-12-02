export default function (node: HTMLDivElement, index: number) {
    function getFocues(): HTMLInputElement[] {
        return Array.from(document.querySelectorAll('.btn'));
    }
    $effect(() =>
        getFocues()[index].focus());
}