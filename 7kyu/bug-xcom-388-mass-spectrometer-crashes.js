const Spectrometer = {
    getHeaviest: function (atomicMasses) {
        return atomicMasses.length === 0 ? 0 : atomicMasses.sort((a, b) => b - a)[0]
    },
};