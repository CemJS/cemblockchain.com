import { initProject } from 'cemjs-all'
import cemjs from './config/cemjs.json'
import pages from './config/pages.json'
import frontends from './config/frontends.json'
import services from './config/services.json'

export default function () {
    initProject({ cemjs, pages, frontends, services })
}