/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hMzuorOwmwx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog"
import { JSX, SVGProps } from "react"
import React , {useEffect , useCallback , useState} from 'react';

export default function Component() {

  const [isNotificationAllowed, setIsNotificationAllowed] = useState(false);

  const sendNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted'){
      new Notification('Hello Developers!!!' , {
        body:"This is the Successfull Notification",
        icon : '/loginnew.png',
      });
    }
  };

  const requestNotificationPermission = useCallback(() => {

    if ('Notification' in window){
      Notification.requestPermission().then(function (permission){
        
        if (permission === 'granted'){
          console.log('Notification permission granted !!!');
          //sendNotification();
          setIsNotificationAllowed(true);
        } else {
          setIsNotificationAllowed(false);
        }
      })
    }
    
  }, []);

  // useEffect(() => {
  //   if ('Notification' in window){
  //     requestNotificationPermission();
  //   }
  // },[requestNotificationPermission]);

  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setIsNotificationAllowed(true);
      } else {
        requestNotificationPermission();
      }
    }
  }, [requestNotificationPermission]);

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-sm p-6 text-center space-y-6">
        <h1 className="text-lg">Hello😁</h1>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-700 opacity-20 animate-ping" />
            <div className="absolute inset-0 rounded-full bg-purple-700 opacity-20 animate-ping delay-100" />
            <div className="absolute inset-0 rounded-full bg-purple-700 opacity-20 animate-ping delay-200" />
            <BellIcon className="w-20 h-20 text-purple-500" />
          </div>
        </div>
        <div>
          
          {isNotificationAllowed ? (
            <>
            <h2 className="text-2xl font-bold">😀Hurray...</h2>
            <p className="text-gray-400">You can send the Notification.</p>
            </>
          ) : (
            <>
            <h2 className="text-2xl font-bold">😔Ohh NO...</h2>
            <p className="text-gray-400">You cannot send the Notification.</p>
            </>
          )}
        </div>
        <Dialog>
        <DialogTrigger asChild>
          {isNotificationAllowed && (
          <Button
           onClick={sendNotification}
           className="w-full bg-purple-700 hover:bg-purple-600">Send Notification</Button>
          )}
        </DialogTrigger>
        <DialogContent className="bg-black text-white backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center p-6 space-y-4">
            <h2 className="text-2xl font-bold">👋Hii You Got Notification</h2>
            <div>
              {/* <Button className="ml-auto bg-purple-700 hover:bg-purple-600">Close</Button> */}
              <DialogClose asChild>
                <Button type="button" className="ml-auto bg-purple-700 hover:bg-purple-600 text-white" >
                  Close
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    </div>

    
   )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
