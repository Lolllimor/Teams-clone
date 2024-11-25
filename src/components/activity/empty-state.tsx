import Image from 'next/image';
import React from 'react';

export const EmptyStateActivity = ({
  activeStates,
}: {
  activeStates: { mentions: boolean; unread: boolean };
}) => {
  return activeStates.mentions && activeStates.unread ? (
    <p className="text-sm text-black-grayish text-center w-4/5">
      We didn't find any matches.
    </p>
  ) : activeStates.unread && !activeStates.mentions ? (
    <div className="flex flex-col gap-3 items-center">
      <Image
        alt="thuumbs up"
        width={76}
        height={80}
        className=" h-fit w-fit"
        src="https://statics.teams.cdn.office.net/teams-modular-packages/hashed-assets/fe8e584b72f83fdb02e06cb977cf7098.png"
      />
      <span className="text-sm font-semibold text-black-grayish text-center">
        You're all caught up
      </span>
      <p className="text-sm text-black-grayish text-center w-[90%]">
        You don't have any unread activity here. Use the toggle to switch
        between read and unread activity.
      </p>
    </div>
  ) : !activeStates.unread && activeStates.mentions ? (
    <p className="text-sm text-black-grayish text-center w-4/5">
      We didn't find any matches.
    </p>
  ) : (
    <p className="text-sm text-black-grayish text-center w-4/5">
      You will see @mentions, reactions and other notifications here.
    </p>
  );
};
