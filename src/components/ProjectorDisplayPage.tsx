import React, { useEffect, useState } from 'react';
import {
  getLiveProjectorState,
  LiveProjectorState,
  parseProjectorSnapshotHash,
  PROJECTOR_MSG_HELLO,
  PROJECTOR_MSG_STATE,
  subscribeLiveProjector,
} from '../utils/projectorBus';
import { ProjectorCanvas } from './ProjectorCanvas';

function resolveInitialProjectorState(): LiveProjectorState {
  const stored = getLiveProjectorState();
  if (typeof window === 'undefined') return stored;
  const fromHash = parseProjectorSnapshotHash(window.location.hash);
  if (fromHash && (stored.kind === 'idle' || fromHash.updatedAt > stored.updatedAt)) {
    return fromHash;
  }
  return stored;
}

export const ProjectorDisplayPage: React.FC = () => {
  const [liveState, setLiveState] = useState<LiveProjectorState>(() =>
    resolveInitialProjectorState()
  );

  useEffect(() => {
    setLiveState(resolveInitialProjectorState());
    const unsubscribe = subscribeLiveProjector((next) => {
      setLiveState(next);
    });

    const handleHashChange = () => {
      const fromHash = parseProjectorSnapshotHash(window.location.hash);
      if (fromHash) {
        setLiveState(fromHash);
      }
    };

    const handleOpenerMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === PROJECTOR_MSG_STATE && event.data.state) {
        setLiveState(event.data.state as LiveProjectorState);
      }
    };

    const sendHelloToOpener = () => {
      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage({ type: PROJECTOR_MSG_HELLO }, window.location.origin);
        }
      } catch {
        // ignore cross-origin opener errors
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('message', handleOpenerMessage);
    window.addEventListener('focus', sendHelloToOpener);
    sendHelloToOpener();

    return () => {
      unsubscribe();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('message', handleOpenerMessage);
      window.removeEventListener('focus', sendHelloToOpener);
    };
  }, []);

  return <ProjectorCanvas state={liveState} isFullViewport />;
};

export default ProjectorDisplayPage;
