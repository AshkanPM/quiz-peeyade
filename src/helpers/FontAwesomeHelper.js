import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo, faPause, faPlay, faStopwatch } from '@fortawesome/free-solid-svg-icons'

export const fontAwesomeInit = () => {
	library.add(faRedo)
	library.add(faPause)
	library.add(faPlay)
	library.add(faStopwatch)
}
