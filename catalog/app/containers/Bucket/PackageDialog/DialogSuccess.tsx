import * as R from 'ramda'
import * as React from 'react'
import { Link } from 'react-router-dom'
import * as M from '@material-ui/core'

import * as NamedRoutes from 'utils/NamedRoutes'
import StyledLink from 'utils/StyledLink'

const useStyles = M.makeStyles({
  content: {
    paddingTop: 0,
  },
})

export interface DialogSuccessRenderMessageProps {
  bucketLink: React.ReactNode
  packageLink: React.ReactNode
}

const defaultRenderMessage = (props: DialogSuccessRenderMessageProps) => (
  <>
    Pushed to {props.bucketLink} as {props.packageLink}
  </>
)

interface DialogSuccessProps {
  browseText?: React.ReactNode
  bucket: string
  hash: string
  name: string
  onClose: () => void
  renderMessage?: (props: DialogSuccessRenderMessageProps) => React.ReactNode
  title?: React.ReactNode
}

// TODO: use the same API as for DialogError and DialogLoading
export default function DialogSuccess({
  browseText,
  bucket,
  hash,
  name,
  onClose,
  renderMessage,
  title,
}: DialogSuccessProps) {
  const classes = useStyles()
  const { urls } = NamedRoutes.use()

  const packageUrl = urls.bucketPackageTree(bucket, name, hash)
  const packageLink = (
    <StyledLink to={packageUrl}>
      {name}@{R.take(10, hash)}
    </StyledLink>
  )
  const bucketLink = (
    <StyledLink to={urls.bucketOverview(bucket)}>s3://{bucket}</StyledLink>
  )

  return (
    <>
      <M.DialogTitle>{title || 'Push complete'}</M.DialogTitle>
      <M.DialogContent className={classes.content}>
        <M.Typography>
          {(renderMessage || defaultRenderMessage)({ bucketLink, packageLink })}
        </M.Typography>
      </M.DialogContent>
      <M.DialogActions>
        <M.Button onClick={onClose}>Close</M.Button>
        <M.Button
          onClick={onClose}
          component={Link}
          to={packageUrl}
          variant="contained"
          color="primary"
        >
          {browseText || 'Browse package'}
        </M.Button>
      </M.DialogActions>
    </>
  )
}
