// eslint-disable-next-line no-unused-vars
import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { io, Socket } from 'socket.io-client';
import { Dispatch } from 'redux';
import type { ServerToClientEvents } from '../types/SocketTypes';
import eventApi from '../api/event.api';
import eventActions from '../redux/actions/event.actions';

export default function useFetch() {
  const dispatch: Dispatch<any> = useDispatch();
  const socket: Socket<ServerToClientEvents> = io('http://localhost:4000');
  const [backendNotification, setBackendNotification] = useState(false);
  const [fetchStatus, setFetchStatus] = useState('idle');

  const callbacVariable = useCallback(() => {
    socket.once('changeNotification', () => {
      setBackendNotification(!backendNotification);
    });
  }, [backendNotification]);

  useEffect(() => {
    callbacVariable();
    setFetchStatus('loading');
    eventApi.getAllEvents().then((response) => {
      dispatch(eventActions.getEventsAction(response.data));
      setFetchStatus('success');
    }).catch(() => setFetchStatus('error'));
  }, [backendNotification]);
  return { fetchStatus };
}
