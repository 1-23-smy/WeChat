
// Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// Create an AudioWorkletNode
audioContext.audioWorklet.addModule('/path/to/your/processor.js').then(() => {
    const pitchShifterNode = new AudioWorkletNode(audioContext, 'pitch-shifter-processor');

    // Connect the node to the audio context
    pitchShifterNode.connect(audioContext.destination);
});


