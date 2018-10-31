import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo, faStop, faStopwatch } from '@fortawesome/free-solid-svg-icons'

export const fontAwesomeInit = () => {
	library.add(faRedo)
	library.add(faStop)
	library.add(faStopwatch)
}
