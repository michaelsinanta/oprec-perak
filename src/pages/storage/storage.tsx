import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const eventIdState = atom({
    key: 'eventIdState',
    default: null,
    effects_UNSTABLE: [persistAtom],
})

export const isModalOpenState = atom({
    key: 'isModalOpenState',
    default: false,
    effects_UNSTABLE: [persistAtom],
})