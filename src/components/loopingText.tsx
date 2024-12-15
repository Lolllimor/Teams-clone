    import TextLoop from "@kelvinkhai/react-text-loop";

export default function LoopingText() {
    return (
        <TextLoop
            noWrap={true}
            interval={2000}
            springConfig={{
                stiffness: 180,
                damping: 25,
            }}
        >
            <span>We are setting things up for you...</span>
            <span>Almost there...</span>
            <span>Capital</span>
        </TextLoop>
    );
}
