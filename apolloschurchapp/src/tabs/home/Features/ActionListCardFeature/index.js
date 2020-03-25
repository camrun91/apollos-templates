import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { styled, ActionListCard, H3, H6 } from '@apollosproject/ui-kit';

const StyledH6 = styled(({ theme }) => ({
  color: theme.colors.text.tertiary,
}))(H6);

const ActionListCardFeature = memo(
  ({
    actions,
    id,
    isLoading,
    onPressCardActionButton,
    onPressActionItem,
    subtitle,
    title,
  }) => (
    <ActionListCard
      isLoading={isLoading}
      key={id}
      header={
        <>
          {isLoading || title ? ( // we check for isloading here so that they are included in the loading state
            <StyledH6 numberOfLines={1}>{title}</StyledH6>
          ) : null}
          {isLoading || subtitle ? <H3>{subtitle}</H3> : null}
        </>
      }
      actions={actions}
      onPressActionItem={onPressActionItem}
      onPressCardActionButton={onPressCardActionButton}
    />
  )
);

ActionListCardFeature.displayName = 'Features';

ActionListCardFeature.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.number,
  isLoading: PropTypes.bool,
  onPressCardActionButton: PropTypes.func,
  onPressActionItem: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default ActionListCardFeature;