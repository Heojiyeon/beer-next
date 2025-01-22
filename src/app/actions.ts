'use server';

import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:jiy7107@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.SECRET_NOTION_KEY_VAPID_PRIVATE_KEY!
);

let subscription: webpush.PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
  // 브라우저의 PushSubscription을 web-push 형식으로 변환
  const webPushSubscription = sub.toJSON() as webpush.PushSubscription;

  // 브라우저 PushSubscription 객체에는 keys가 없을 수 있으므로 수동으로 추가
  if (!webPushSubscription.keys) {
    // keys를 수동으로 설정하거나, 브라우저에서 구독 시 keys를 전달하도록 설정해야 합니다.
    webPushSubscription.keys = {
      p256dh: '', // 예시: 실제 값을 넣어야 합니다.
      auth: '', // 예시: 실제 값을 넣어야 합니다.
    };
  }

  subscription = webPushSubscription;

  // 실제 프로덕션에서는 데이터베이스에 저장
  // 예: await db.subscriptions.create({ data: subscription });

  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;

  // 실제 프로덕션에서는 데이터베이스에서 제거
  // 예: await db.subscriptions.delete({ where: { ... } });

  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error('No subscription available');
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png',
      })
    );
    return { success: true };
  } catch (error) {
    console.error('Error sending push notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
}
