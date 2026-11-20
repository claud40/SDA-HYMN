import React, { useEffect, useState } from 'react';
import {
  getLiveProjectorState,
  LiveProjectorState,
  parseProjectorSnapshotHash,
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
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      unsubscribe();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <ProjectorCanvas state={liveState} isFullViewport />;
};

export default ProjectorDisplayPage;
