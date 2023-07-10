function helper_3 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
function _7 () {
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    helper_5()
}
function _2 () {
    helper_2()
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _6 () {
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(466, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
}
function helper_5 () {
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _5 () {
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    helper_3()
    helper_5()
}
function _3 () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    helper_3()
    helper_1()
}
function helper_2 () {
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
}
function _8 () {
    _6()
}
function helper_1 () {
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _4 () {
    helper_2()
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
function _1 () {
    music.rest(music.beat(BeatFraction.Double))
    helper_1()
}
music.setTempo(110)
_1()
_2()
_3()
_4()
_5()
_6()
_7()
_8()
