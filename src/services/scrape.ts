import { useMutation } from 'react-query';
import { useState } from 'react';

// import { TAccount } from '../providers/AuthProvider';
import client from './client';
// import { useAuthContext } from '../providers/hooks/useAuthContext';
import { Error } from '../types/general';
import {ScrapeUrlResponse} from "../types/scrape";

export function useScrape() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [result, setResult] = useState<ScrapeUrlResponse>();

  const { mutate, isLoading } = useMutation(client.scrape.url, {
    onSuccess: (data) => {
      setResult(data)
    },
    onError: (error: Error) => {
      console.log("🚀 ~ file: user.ts:39 ~ useLogin ~ error", error)
    },
  });

  return { mutate, isLoading, serverError, setServerError, result };
}
