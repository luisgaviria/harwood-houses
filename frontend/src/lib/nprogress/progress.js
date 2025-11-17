import { browser } from '$app/environment';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

if (browser) {
  NProgress.configure({ showSpinner: false });
}

export function startProgress() {
  if (browser) {
    NProgress.start();
  }
}

export function completeProgress() {
  if (browser) {
    NProgress.done();
  }
}